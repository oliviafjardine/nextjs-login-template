import type { Metadata } from "next";
import Main from "@/components/Main";
import Login from "@/components/sections/Login";
import Dashboard from "@/components/sections/Dashboard";

export const metadata: Metadata = {
    title: "Swello | Dashboard",
};

const DashboardPage = () => {
    const isAuthenticated = true;

    let children = (
        <Login />
    )

    if (isAuthenticated) {
        children = (
            <Dashboard />
        )
    }

    return (
        <Main>
            {children}
        </Main>
    );
};

export default DashboardPage;
