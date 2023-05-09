import React  from "react";
import AddForm from "../components/AddForm";

import { redirect } from "react-router-dom";

import { addTask } from "../firebase";



const Add = () => {
    return (
       <>

        <AddForm />
       </>
    )
}

export default Add;


export async function action({request}) {


    const data = await request.formData();

  const eventData = {
    title: data.get('text-title'),
    info: data.get('text-info'),
    id: Math.random()
}

addTask(eventData)

return redirect('..')

}

