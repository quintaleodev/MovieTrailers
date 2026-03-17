import { SearchbarContainer } from "./Searchbar.styles.jsx";
import { Search } from "lucide-react";

export default function Searchbar(){

    const { searchQuery, setSearchQuery } = useContext(MovieContext); //usaremos para alterar o contexto do que vai ser pesquisado
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); //para que a página não recarregue de forma automática
        if (inputValue.trim()) {// Só executa se houver texto válido
            setSearchQuery(inputValue.trim()); // Envia limpo para a API
        } //atualizando o estado do contexto 
    }

    useEffect(()=>{
        
        if (searchQuery === ''){
            setInputValue('');
        }
    }, [searchQuery]); //useEffect acontece sempre que o searchQuery muda

    return (
        <SearchbarContainer onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}      
                onChange={(e) => setInputValue(e.target.value)} //evento disparado sempre que o usuário faz uma modificação no que está na barra de pesquisa
                placeholder="Insira o nome de um filme"
            />
            <button type="submit"><Search/></button>
        </SearchbarContainer>
    )
};