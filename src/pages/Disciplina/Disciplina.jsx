import "./Disciplina.css";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ThemeCard } from "../../components/ThemeCard/ThemeCard";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthEadContext } from "../../contexts/authEad";


export const Disciplina = () => {

    const id_theme = useParams();
    const { themes, updatetStatusTheme } = useContext(AuthEadContext);
    



    const [result, setResult] = useState([]);
    const [video, setVideo] = useState("");


    async function getThemes() {
        const listThemes = await themes(id_theme.id);
        setResult(listThemes.data)
    }

    function setLinkVideo(link) {
        setVideo(link);
    }

    async function setStatus(status, id_theme){
         await updatetStatusTheme(status, id_theme)
    }



    useEffect(() => {
        getThemes()
    }, [])

    return (
        <>
            <Header />
            <main className="content_disciplina">
                <div className="cards">
                    <div className="content_theme">
                        <div className="disciplina_content_themes">
                            {
                                result.map((element) => {
                                    let item = element.status.map(i => i.status) 
                                    return <ThemeCard
                                        key={element._id}
                                        name={element.name}
                                        description={element.description}
                                        video={element.videoLessons}
                                        id_theme={element._id}
                                        clickLink={setLinkVideo}
                                        statusTheme={(item[0] != undefined) ? item[0] : false}
                                        clickUpdateStatus={setStatus}
                                    />

                                })
                            }
                        </div>

                        <div className="theme_video">
                            <iframe src={video}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}