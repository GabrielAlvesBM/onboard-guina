import Text from "@/atomic/atm.typography";
import EmptyProjectMessage from "@/atomic/mol.empty-project-message";
import * as homeStrings from "./home.strings";

const HomePage = () => {
  return (
    <>
      <Text variant="h1" className="my-md text-left">
        {homeStrings.TITLE}
      </Text>

      <EmptyProjectMessage />
    </>
  );
};

export default HomePage;
