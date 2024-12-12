import AccountContentWrapper from '../../components/accountContentWrapper/AccountContentWrapper'
import './account.css'

// Penser au Header
// -> Sign out + User name

const arrayTestAccountContent = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
    }, 
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance",
    }
]

const Account = () => {
    return (
        <>
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            
            <h2 class="sr-only">Accounts</h2>
            {
                arrayTestAccountContent.map((item, index) => (
                    <AccountContentWrapper
                        key={index}
                        title={item.title}
                        amount={item.amount}
                        description={item.description}
                    />
                ))
            }
        </>
    )
}

export default Account