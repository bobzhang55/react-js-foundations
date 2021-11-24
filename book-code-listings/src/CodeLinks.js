import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDownload } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fab, faHome, faDownload);

function CodeLinks() {
  return (
    <>
      <p>
        You
        can download the examples, report issues, and ask/answer questions in
        the discussion area by visiting the book's{" "}
        <a href="https://github.com/chrisminnick/react-js-foundations">
          github page
        </a>
        .
      </p>
      <p>All of the code for the book is also available on <a href="https://codesandbox.io/s/book-code-listings-f4565">codesandbox.io</a> for you to play around with.</p>
      <span className="navlink">
        <a
          title="download code"
          href="https://github.com/chrisminnick/react-js-foundations/archive/refs/heads/main.zip"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Code
        </a>
      </span>
      <span className="navlink">
        <a
          title="github repo"
          href="https://github.com/chrisminnick/react-js-foundations"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> Github
        </a>
      </span>

    </>
  );
}

export default CodeLinks;