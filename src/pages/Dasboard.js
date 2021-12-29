import { useEffect, useState } from "react";
import Form from "@rjsf/core";

const defaultSchema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        membership: {
            type: "string",
            default: "Supporter"
        },
        title: {
            type: "string",
            title: "Title",
            default: "A new task"
        },
        done: {
            type: "boolean",
            title: "Done?",
            default: false
        },
        name: {
            type: "string"
        },
        age: {
            type: "number"
        },
        picture: {
            type: "string",
            default: ''
        }
    },
};

function Dashboard() {
    const [form, setForm] = useState([]);
    const [memberSchema, setSchema] = useState(defaultSchema);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://dummyapi.io/data/v1/user/", { headers: { 'app-id': '61ca24b6bf95643e71ebbe39' }, path: { id: '60d0fe4f5311236168a109ca' } })
                .then(res => res.json())
                .then(
                    (result) => {
                        // console.log(result.data[0]);
                        setForm(result.data[0]);
                        let data = result.data[0];
                        setSchema(
                            {
                                title: "Todo",
                                type: "object",
                                required: ["title"],
                                properties: {
                                    membership: {
                                        type: "string",
                                        default: "Supporter",
                                        readOnly: true
                                    },
                                    title: {
                                        type: "string",
                                        title: "Title",
                                        default: data.title
                                    },
                                    joined: {
                                        type: "string",
                                        format: 'date',
                                        title: "Member Since?",
                                        // default: "01/01/1990"
                                    },
                                    firstName: {
                                        type: "string",
                                        default: data.firstName
                                    },
                                    lastName: {
                                        type: "string",
                                        default: data.lastName
                                    },
                                    picture: {
                                        type: "string",
                                        default: data.picture
                                    }
                                }
                            }
                        );
                    },
                    (error) => {
                        console.log("Error:" + error);
                    }
                )
        }

        fetchData();
    }, [])

    return (
        <main style={{ padding: "1rem 0" }}>
            <h3>Manage your account</h3>
            <img src={memberSchema.properties.picture.default} style={{ height: '100px' }} />
            <Form onError={e => console.log("errors: " + e)} onSubmit={() => updateData(memberSchema)} schema={memberSchema} />
        </main>
    );

}

export default Dashboard;

function updateData(data) {
    const requestOptions = {
        method: 'GET',
        // headers: { 'app-id': '61ca24b6bf95643e71ebbe39' },
        // body: JSON.stringify(data)
    };
    fetch('https://9794e152-d30a-47cc-9ccc-4fdcc6e75bfc.mock.pstmn.io/get', requestOptions)
        .then(response => response.json())
        .then(
            (result) => {
                console.log("Result: " +JSON.stringify(result));
            },(error) => {
                console.log("Error:" + error);
            }
        );
}