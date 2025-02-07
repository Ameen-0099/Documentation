import { client } from "@/sanity/lib/client"
import Image from "next/image"
const product = async () => {
       const query = `*[_type=="products"]{
       price,"imageUrl":image.asset->url,title,description,inventory,tags,_id,category}`
       const res = await client.fetch(query)
        console.log(res)
         return(
                <div className="">
                       <h1 className="text-5xl m-3 mb-0 pl-6 font-semibold">Products</h1>
                       <div className=" grid grid-cols-4 p-10 gap-3 ">
                             {res.map((product:any)=>(
                                   <div key={product} className="">
                                             <Image  
                                             src={product.imageUrl} 
                                             key={product._id} 
                                             alt="Product Image" 
                                             width={333}
                                             height={333}
                                             className=""
                                             />   
                                              <div className="price flex justify-around items-center">
                                              <p className="text-lg "> {product.title} </p>
                                              <p className="font-semibold">{product.price}$</p>
                                                 </div>    
                                                                                       
                                    </div>      
                             ))}
                       </div>      
                </div>
         )
}
export default product