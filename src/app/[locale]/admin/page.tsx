import withAuth from "@/utils/with-auth"

function AdminPage() {
    return (
        <div>
            Admin panel
        </div>
    )
}

export default withAuth(AdminPage)