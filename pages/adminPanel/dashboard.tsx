import React from 'react';
import Orders from "domain/panel/dashboard/orders/orders";
import Comments from "domain/panel/dashboard/comments/comments";
import Purchases from "domain/panel/dashboard/purchases/purchases";
import AdminLayout from "layout/panel/admin/admin";

const dashboard = () => {

    return (
        <div className="summaryActivities">
         <Orders/>
         <Comments/>
         <Purchases />
        </div>
    );
};

export default dashboard;

dashboard.getLayout=function PageLayout(page:React.ReactNode){
    return <AdminLayout>{page}</AdminLayout>
}