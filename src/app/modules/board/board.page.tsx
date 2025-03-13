import { useParams } from "react-router-dom";

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();

  return <h1>Board Page: {boardId}</h1>;
};

export default BoardPage;
