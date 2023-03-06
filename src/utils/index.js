
export const getOrdersOtherThanGivenOrderStatus = (arr,providedStatus)=>
{
 return Array.isArray(arr) && arr?.filter((currOrder,index)=> (currOrder?.status.toLowerCase() !== providedStatus.toLowerCase()))
}

export const filterOrdersByOrderStatus = (arr,providedStatus)=>
{
    // const filteredData = Array.isArray(arr) && arr?.length>0 ?  arr?.filter((currOrder,index)=> (currOrder?.status.toLowerCase() === providedStatus.toLowerCase()))
 return Array.isArray(arr) && arr?.filter((currOrder,index)=> (currOrder?.status.toLowerCase() === providedStatus.toLowerCase()))
}

export const countOrdersByOrderStatus = (arr,providedStatus)=>
{
 return Array.isArray(arr) && arr?.filter((currOrder,index)=> (currOrder?.status.toLowerCase() === providedStatus.toLowerCase()))?.length
}

export const countInDeliveryOrder = (arr)=>
{
 return Array.isArray(arr) && arr?.filter((currOrder,index)=> (currOrder?.status === "in delivery"))?.length
}