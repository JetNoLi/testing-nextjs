import axios from 'axios';
import { NextPage } from 'next';
import { Context } from 'next-redux-wrapper';
import { useRouter } from 'next/router';

const ToDoItem:NextPage = ({ item } : any) => {
    // For child pages do I use the id to query db in the getServerProps or just use a useSelector here with state?
    
    const router = useRouter();
    const {id} = router.query;
    
    return(
        <>
            <div> Hello {id} </div>
            <div>
                <p> Title: {item.title} </p>
                <p> isCompleted: {item.completed ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export async function getServerSideProps(context: any){
    // Should these calls all be put into utils to be reused or server file?
    // Also is it possible to update the Store in the server side methods so that they reflect here or am I using that method to pass props to redux and update from there?
    const {id} = context?.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

    return {
        props: {
            item: response.data
        }
    }
}

export default ToDoItem;