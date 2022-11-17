


function Market1 (props){
    return(
        <>
       
       <div class=" px-4 pt-8 container sm:mx-auto mb-7 sm:pt-32   w-full pt-50 ">
                <h1 class=" text-4xl lg:text-7xl font-bold tracking-tight">
                    { props.Titulo1}<br/>
                    {props.Titulo2} <br/>
                    {props.Titulo3} </h1>
                <p class=" mt-2 lg:mt-5 text-sm lg:text-lg font-medium text-gray-500"> {props.Paragraph} </p>
        </div>
        
        </>
    )
}
export default Market1