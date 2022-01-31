import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseQuestions = Record<string,{
  author:{
    name: string;
    avatar: string;
  }
  content:string;
  isAnswerd:boolean;
  isHighlighted: boolean;
  likes:Record<string, {
    authorId:string;
  }>
}>


type QuestionType = {
    id: string;
    author: {
      name: string;
      avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likeId:string | undefined;
  
  }


export function useRoom(roomId:string | undefined){
  const {user} = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('');

    useEffect(()=>{
        const roomRef = database.ref(`rooms/${roomId}`);
    
        
        //documentação do firebase
        //estratégia de event listner
        //.val é da API do firebase tb 
        roomRef.on('value', room =>{
          // console.log(room.val());
          const databaseRoom = room.val();
          const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
    
          const parsedQuestions = Object.entries(firebaseQuestions).map(([key,value]) =>{
            return {
              id: key,
              content: value.content,
              author: value.author,
              isHighlighted: value.isHighlighted, 
              isAnswered: value.isAnswerd,
              likeCount:Object.values(value.likes ?? {}).length,
              //some só retorna true ou false
              //funcionalidade de like
              likeId:Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId == user?.id)?.[0]
                
            }
          })
    
    
    
          setTitle(databaseRoom.title);
          setQuestions(parsedQuestions);
    
    
    
    
    
    
        })

        return()=>{
          roomRef.off('value')
        }
    
      }, [roomId, user?.id]);


      return{questions, title}

}