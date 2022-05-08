export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      id,
    },
  };
}

export default function placeholder({ id }) {
  return <div>{id}</div>;
}
