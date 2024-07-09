import { createContext, useState } from "react";
import { PropsCommandType } from "../types/interfaces";



export const CommandContext = createContext<any>("command-context");

export const ComandListProvider = ({children}:{children:any}) => {

    const [commands, setCommands] = useState<PropsCommandType[]>([]);
    const [commandsEnLiv, setCommandsEnLiv] = useState<PropsCommandType[]>([]);

    // const [command,setCommand] = useState<PropsCommandType>();
    const [loading, setLoading] = useState(false);


    const [commandsEnTraitement, setCommandsEnTraitement] = useState<PropsCommandType[]>([]);
    // const [commandEnTraitement,setCommandEnTraitement] = useState<PropsCommandType>();
    // const [loading, setLoading] = useState(false);


    const updateCommandsEnTraitement = (commands:PropsCommandType[]) => {
      setCommandsEnTraitement(commands)
      }


      
    
      const removeCommandEnTraitementById = (id:string) => {
        const newCommands = commandsEnTraitement.filter((command:PropsCommandType) => command.id != id);
        setCommandsEnTraitement(newCommands);
      }

      const addCommandEnTraitement = (command:PropsCommandType) => {
        
        setCommandsEnTraitement([... commandsEnTraitement, command]);
      }


      const updateCommands = (commands:PropsCommandType[]) => {
        setCommands(commands)
      }


      const addCommands = (commandInComm:PropsCommandType[]) => {
        setCommands([...commands,...commandInComm])
      }
      
  
      const removeCommandById = (id:string) => {

        
        const newCommands = commands.filter((command:PropsCommandType) => command.id != id);


        setCommands(newCommands);
      }

      const updateCommandsEnLiv = (commands:PropsCommandType[]) => {
        setCommandsEnLiv(commands)
      }


      const addCommandsEnLiv = (commandInComm:PropsCommandType[]) => {
        setCommandsEnLiv([...commandsEnLiv,...commandInComm])
      }
      
  
      const removeCommandByIdEnLiv = (id:string) => {

        
        const newCommands = commandsEnLiv.filter((command:PropsCommandType) => command.id != id);


        setCommandsEnLiv(newCommands);
      }

    return (
        <CommandContext.Provider value={{addCommands, commands,addCommandEnTraitement,removeCommandById, updateCommandsEnLiv,commandsEnLiv,updateCommands,loading,setLoading ,updateCommandsEnTraitement, removeCommandEnTraitementById,commandsEnTraitement }}>
          {children}
        </CommandContext.Provider>
      );

   
}