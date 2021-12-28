import { useEffect, useState } from "react/cjs/react.development";

export default function Dashboard() {
    const [form, setForm] = useState([]);

    async function fetchData() {
        await fetch(" https://dummyapi.io/data/v1/user", { headers: { 'app-id': '61ca24b6bf95643e71ebbe39' } })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                    setForm(result.data);
                },
                (error) => {
                    console.log("Error:" + error);
                }
            )
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <main style={{ padding: "1rem 0" }}>
            <h3>Dashboard</h3>
            <Form data={form} />
        </main>
    );
}

function Form(props) {
    const data = props.data;
    const listData = data.map((item) =>
        <li key={item.id}>{item.firstName}</li>
    );
    return (
        <>
            <h4>Data:</h4>
            <ul>{listData}</ul>
        </>
    );
}