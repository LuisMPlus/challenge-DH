import CompanyForm from "./CompanyForm/Form";

function Section(){
    return(
        <div>
            <div className="p-4">
                <h2>
                    Formulario de registro
                </h2>
            </div>

            <section className="">
                <CompanyForm/>
            </section>
        </div>
    );
}

export default Section;