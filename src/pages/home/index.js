
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function home() {
    const router = useRouter()
    // return <div>home</div>;
    useEffect(() => {
        router.push('/')
    },[])
    
}

export default home;
