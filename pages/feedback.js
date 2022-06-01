import styles from "../styles/Feedback.module.scss";

export default function Feedback(props) {
  return (
    <div className="container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdPvxHAjR391U6qK_fObwrKxWEA093t0rGo9mGwAFGiBZMY5g/viewform?embedded=true"
        width="640"
        height="1000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
