import type { Metadata } from "next";
import Main from "@/components/Main";
import Dashboard from "@/components/sections/Dashboard";

export const metadata: Metadata = {
    title: "Swello | Dashboard",
};

const DashboardPage = () => {
    return (
        <Main>
            <Dashboard />
        </Main>
    );
};

export default DashboardPage;
