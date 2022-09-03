import React from 'react';
import {useRouter} from "next/router";
import Products from "pages/product/[...slug]";
import AdminLayout from "layout/panel/admin/admin";

const Suu = () => {
    const router = useRouter()
    const { ii } = router.query
    return (
        <div>
            {ii}
        </div>
    );
};

export default Suu;

Suu.getLayout=function PageLayout(page:React.ReactNode){
    return <AdminLayout>{page}</AdminLayout>
}