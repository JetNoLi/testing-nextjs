export const getData = () =>{
    return ({
      type: "Inc",
      payload: { }
    })
  }

export const decrease = () =>{
    return ({
      type: "Dec",
      payload: { }
    })
  }

  export const overwrite = (value: number) =>{
    return ({
      type: "Rep",
      payload: value
    })
  }

export const fetchTODOS = (id: string) =>{
    return({
        type: "Fetch",
        payload: id
    })
}