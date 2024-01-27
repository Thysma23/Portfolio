export default function ProfilPicture() {
    return (
        <div className="bg-blue-500 p-8 rounded-full h-72 w-72 overflow-hidden flex justify-center my-0 md:my-auto">
            <img
                className="max-h-80 max-w-80 w-72 h-72 -mt-7"
                src={require("../../assets/images/profil_picture.png")}
                alt="tếte de Mathys Meunier"
            />
        </div>
    )
}
