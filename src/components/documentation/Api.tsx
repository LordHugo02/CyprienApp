import React, { useEffect } from 'react';
import bruno from "../../assets/doc/bruno.json"

const Api = () => {

    // const itemsToHTML = (items: any[]) => {
    //     let final = <div></div>
    //     console.log(items);
    //     items.forEach(item => {
    //         if(item.type == "folder"){
    //             final.content += <h2>item.name</h2>
    //         }
    //     });




    //     return final
    // }
    
    return (
        <div className="h-screen w-screen relative">
            {/* {itemsToHTML(bruno.items)} */}
        </div>

    );
};

export default Api;
