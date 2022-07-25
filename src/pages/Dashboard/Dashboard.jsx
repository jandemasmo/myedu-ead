import "./Dashboard.css";
import { FooterEad } from "../../components/FooterEad/FooterEad";
import { HeaderEad } from "../../components/HeaderEad/HeaderEad";
import { Card } from "../../components/Card/Card";
import { useContext, useEffect, useState } from "react";
import { AuthEadContext } from "../../contexts/authEad";

export const Dashboard = () => {

    const [allMaterias, setAllMaterias] = useState([]);
    const { user, disciplinas } = useContext(AuthEadContext);
    

    async function loadData() {
        const infoData = await disciplinas()
        setAllMaterias(infoData.data.materials);
    }

    useEffect(() => {
        loadData()
    }, [])
    
    return (
        <>
            <HeaderEad name={user.name} />

            <main className="content_dashboard">
                <div className="title">
                    <span>Disciplinas</span>
                </div>
                <div className="cards">
                    <div className="cards">
                        {
                            allMaterias.map((materia) => {
                                return <Card 
                                key={materia._id} 
                                id={materia._id} 
                                name={materia.name} 
                                description={materia.description} 
                                educator={materia.id_educator.name}/>
                            })
                        }
                    </div>
                </div>
            </main>

            <FooterEad />
        </>
    )
}