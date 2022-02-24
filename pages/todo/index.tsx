import axios from 'axios';
import type { NextPage } from 'next'
import { Context } from 'next-redux-wrapper';
import Link from 'next/link'

// For Environment Variables do we use standar dotenv? Or do we use the server side variables and get them in the server side props?
// https://nextjs.org/docs/basic-features/environment-variables

const ToDo: NextPage = ({list} : any) => {

    // Or use props to dispatch actions here?
    // Noitced for Hydration they recommend server side and client side store seperation
    // Server and Client state separation

    return(
        <>
            <div>
                <h1> To Dos App Bar</h1>
            </div>
            <div>
                <h2> To Do List</h2>
            </div>
            <div>
                {list.map( (l: any) => {
                    return(
                        <div key = {l.id}>
                            <h4>{l.title}</h4>
                            <input type='checkbox' defaultChecked = {l.completed} />
                            <Link href={`/todo/${l.id}`}>
                                <a> View Item </a>
                            </Link>
                        </div>
                    );
                
                    })
                }
            </div>
        </>
    );
}

export async function getServerSideProps(context: Context){
    // Should these calls all be put into utils to be reused or server file?
    // Also is it possible to update the Store in the server side methods so that they reflect here or am I using that method to pass props to redux and update from there?
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    return {
        props: {
            list: response.data?.slice(0,10)
        }
    }
}

export default ToDo;