import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { auth, signOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/painel");

    return(
        <HeaderSC isDashboard={isDashboard}>
            <TopMenu>
                <LeftOptions>
                    { auth ? <BlueP onClick={signOut}>Seja bem-vindo(a), {auth.name}!</BlueP> : <BlueP>  </BlueP>}
                </LeftOptions>
                <RightOptions>
                    { auth ? <p><Link to="/">Home</Link></p> : <p><Link to="/signin">Entrar</Link></p>}
                    { auth ? <p><Link to="/painel-aluno">Painel do Aluno</Link></p> : <p><Link to="/signup">Cadastrar-se</Link></p> }
                    { auth ? <p onClick={() => {signOut(); navigate("/signin")}}>Sair</p> : "" }
                </RightOptions>
            </TopMenu>
            <img
                src="logo-escola360.png"
                className={isDashboard ? "logo-horizontal" : "logo-central"}
                alt="Logo Escola360"
            />
        </HeaderSC>
    )
}

const RightOptions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9C9C9C;
    margin-top: 10px;
    p {
        padding: 0 15px;
    }
`;

const LeftOptions = styled.div`
    width: 400px;
`;

const TopMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const BlueP = styled.p`
    color: #142B63;
`

const HeaderSC = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.isDashboard ? 'flex-start' : 'center'};
    padding: ${props => props.isDashboard ? '10px 30px' : '30px 100px'};

    img.logo-central {
        margin-top: 3%;
        width: 300px;
    }

    img.logo-horizontal {
        width: 180px;
        margin: 10px 0;
    }

    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }
`;
