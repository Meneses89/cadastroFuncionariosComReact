import "./index.css";
import iconDlt from '../pictures/iconDlt.png'
import iconEdit from '../pictures/iconEdit.png'



function CardFuncionario() {
  const funcionario = [
    {
        id: 1,
        nome: "Rodrigo Almeida",
        filePath: "https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=",
        email: "almeida45@gmail.com",
        telefone: "11 981009900",
        setor: "Desenvolvimento",
    },
    {
        id: 2,
        nome: "Barbara Buck",
        filePath: "https://media.istockphoto.com/photos/portrait-of-smiling-senior-woman-at-home-picture-id1299493615?k=20&m=1299493615&s=612x612&w=0&h=trPzJOBdAH7BFFvnQrkgBV0-9Y_GatzNApxVvb6ngXo=",
        email: "barbarabuck@gmail.com",
        telefone: "11 921709922",
        setor: "Tecnologia",
        },
    {
        id: 3,
        nome: "Alice Camargo",
        filePath: "https://media.istockphoto.com/photos/portrait-of-a-woman-at-city-on-background-picture-id1288104852?k=20&m=1288104852&s=612x612&w=0&h=f-fg9z1UeSj7q4dwa1Pr9rkRGagq4DEaw8M95LMdZdE=",
        email: "alicecamargo@gmail.com01",
        telefone: "11 981109958",
        setor: "Infraestrutura",
    },
    {
        id: 4,
        nome: "Rosangela Farias",
        filePath: "https://media.istockphoto.com/photos/portrait-of-a-confident-young-woman-at-the-park-picture-id1191193169?k=20&m=1191193169&s=612x612&w=0&h=CYzWFQyBO8KJKl4JL6TJQyPiN0FY16KYzrcgjiTFAMQ=",
        email: "rosangelafarias@gmail.com",
        telefone: "11 981559008",
        setor: "Marketing",
    },
    {
        id: 5,
        nome: "Roberto Veiga",
        filePath: "https://p1.pxfuel.com/preview/843/535/782/man-serious-senior-portrait-face-official.jpg",
        email: "robertoveiga@gmail.com",
        telefone: "11 981629922",
        setor: "Tecnologia",
    },
    {
        id: 6,
        nome: "Julio Avelar",
        filePath: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-biracial-man-posing-picture-id1292475584?b=1&k=20&m=1292475584&s=170667a&w=0&h=jZ6etD3dfOV_NIgwR9hIQ5B9TBC5kpYxShIsaqjWbzc=",
        email: "julioavelar@gmail.com",
        telefone: "48 982647881",
        setor: "Desenvolvimento",
    },
        ];

    const novidadesDiv = funcionario.map((funcionario) => (
        <div className="containerCard">
            <img src={funcionario.filePath} alt="Manta lit" className="imgCard"/>
            <div className="infCard">
                
                <p><strong>Nome: </strong>{funcionario.nome}</p>
                <p><strong>Email: </strong>{funcionario.email}</p>
                <p><strong>Telefone: </strong>{funcionario.telefone}</p>
                <p><strong>Setor: </strong>{funcionario.setor}</p>
                
            </div>
            <div className="btnCard">
                <span> <img src={iconEdit}/> </span>
                <span> <img src={iconDlt}/> </span>
                    
            </div>
        </div>
  ));
  return (
    <div>{novidadesDiv}</div>
  );
}

export default CardFuncionario;
