import { useRouter } from "next/router";
import { request } from "../../lib/datocms";
import styles from "../../styles/Landing.module.scss";
import { StructuredText } from "react-datocms";
import Separator from "../../components/Separator";
import { redirect } from "next/navigation";

export async function getServerSideProps({ params }) {
  let article = await request({
    query: `query {article(filter:{slug:{eq:"${params.article}"}}){title,content{value},slug}}`,
  });

  article = article.article;
  console.log(article);
  return { props: { article } };
}

export default function Page({ article }) {
  const router = useRouter();

  if (!article) {
    redirect("/");
  }

  function getSeparatorStuff(title) {
    const stuff = title.split(" ");
    return (
      <>
        <span>{stuff[0]}</span> {stuff.length > 1 && stuff.slice(1).join(" ")}
      </>
    );
  }

  return (
    <div className="container">
      <div className={styles.article}>
        <Separator>{getSeparatorStuff(article.title)}</Separator>
        <div className="blockel">
          <StructuredText data={article.content} />
        </div>
      </div>
    </div>
  );
}
