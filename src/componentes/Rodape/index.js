import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="rodape__social">
                <a href="https://www.linkedin.com/in/marciijunior/" target="_blank" rel="noreferrer">
                    <img src="/imagens/in.png" alt="Facebook" />
                    <h1>Linkedin</h1>
                </a>
                <a href="https://github.com/marciijunior" target="_blank" rel="noreferrer">
                    <img src="/imagens/git.png" alt="GitHub" />
                    <h1>GitHub</h1>
                </a>
                <a href="https://instagram.com/marciijunior" target="_blank" rel="noreferrer">
                    <img src="/imagens/inst.png" alt="Instagram" />
                    <h1>Instagram</h1>
                </a>
            </div>
            <div className="rodape__logo">
                <img src="/imagens/logo.png" alt="Logo" />
            </div>
            <p className="rodape__texto">Desenvolvido por Marcio Junior</p>
        </footer>
    );
};

export default Rodape;