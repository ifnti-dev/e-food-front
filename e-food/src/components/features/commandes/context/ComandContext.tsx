import { createContext, useState } from "react";
import { PropsCommandType } from "../types/interfaces";



export const CommandContext = createContext<any>("command-context");

export const ComandListProvider = ({children}:{children:any}) => {

    const [commands, setCommands] = useState<PropsCommandType[]>([]);
    const [command,setCommand] = useState<PropsCommandType>();
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);


    const updateCommands = (commands:PropsCommandType[]) => {
        setCommands(commands)
      }
      
    
      const addCommand = (command:PropsCommandType) => {
        
        setCommands([... commands, command]);
      }
    
      const updateCommand = (command:PropsCommandType) => {
        setCommand(command);
      }
    
      const removeCommandById = (id:string) => {
        const newCommands = commands.filter((command:PropsCommandType) => command.id !== id);
        setCommands(newCommands);
      }

    return (
        <CommandContext.Provider value={{ commands, command, updateCommand,addCommand,removeCommandById, updateCommands,loading,setLoading }}>
          {children}
        </CommandContext.Provider>
      );

   
}