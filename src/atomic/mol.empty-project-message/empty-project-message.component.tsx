import Text from "../atm.typography";
import Button from "../atm.button";
import { PlaceholderDefault } from "../icons/placeholder";
import * as noProjectMessageStrings from "./empty-project-message.strings";

const handleCreateProject = () => {
  console.log("Criar");
};

const EmptyProjectMessage = () => {
  return (
    <div className="flex flex-col items-center gap-sm py-xl px-lg rounded-md bg-white">
      <PlaceholderDefault />

      <div className="flex flex-col gap-2xs">
        <Text variant="h3">{noProjectMessageStrings.NO_PROJECT}</Text>
        <Text variant="body1">{noProjectMessageStrings.NO_PROJECT_DESC}</Text>
      </div>

      <Button variant="cta" onClick={handleCreateProject}>
        {noProjectMessageStrings.CREATE_PROJECT}
      </Button>
    </div>
  );
};

export default EmptyProjectMessage;
