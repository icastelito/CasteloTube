import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import {Menu} from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estiloDaPagina = { backgroundColor: "purple" };
    console.log(config.playlists);
    return (
        <>
            <CSSReset/>
            <div style={estiloDaPagina}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage


const StyledHeader = styled.div`
.user-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
}
img {
    height: 100px;
    border-radius: 50%;
    border: 0px solid;
    }
img:hover {
    box-shadow: 0px 0px 10px 0px;
    transition: 0.75s;}

.name{
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
}
`;


function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                < img src="" alt="" />
                <img src={`https://avatars.githubusercontent.com/u/${config.github}`} alt="" />
                <h2 className="name">{config.name}</h2>
                <p>{config.job}</p>
            </section>
        </StyledHeader>
    )


}
function Timeline(props) {
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const video = props.playlists[playlistsNames];

                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {video.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} alt="" />
                                        <span>{video.title}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}