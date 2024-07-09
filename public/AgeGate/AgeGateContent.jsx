import '../css/AgeGate.css'
import AgeGateLogo from './Assets/AgeGate_logo.svg'


const ageGateLanguages = [
    {
        id: 'francais', 
        textTerms:'Pour visiter notre site, vous devez être en âge légal d’acheter et de consommer de l’alcool selon la législation de votre pays de résidence. S’il n’existe pas de législation à ce sujet, vous devez être âgé de 18 ans au moins.',
        terms: 'J’accepte ces termes et conditions :',
        non: 'Non',
        oui: 'Oui'
    },
    {
        id: 'english', 
        textTerms:'To visit our site, you must be of legal age to purchase and consume alcohol according to the legislation of your country of residence. If there is no such legislation, you must be at least 21 years old.',
        terms: 'I accept these terms and conditions :',
        non: 'No',
        oui: 'Yes'
    }
]

export function AgeGateContent({id}) {
    const ageGateLanguage = ageGateLanguages.find(ageGateLanguage => ageGateLanguage.id === id)

    return(
        <div key={ageGateLanguage.id} id='ageGate_section'>
            <main className="flex">
                <div className="ageGate_content">
                    <div className="ageGate_logo flex center">
                        <img className="ageGate_kirwanLogo" src={AgeGateLogo} alt="Logo du Château Kirwan"/>
                    </div>
                    <div className="ageGate_language flex center">
                        <div className="ageGate_languageSettings flex spaceBetween">
                            <a id="ageGate_languageLinks_Fr" className="ageGate_languageLinks ageGate_languageLinks_opacity100" href="./fr">Français</a>
                            <a id="ageGate_languageLinks_En" className="ageGate_languageLinks" href="./en">English</a>
                        </div>
                    </div>
                    <div className="ageGate_text">
                        <p dangerouslySetInnerHTML={{__html: ageGateLanguage.textTerms}} className="ageGate_textParagraph" id="ageGate_textParagraphFr">

                        </p>
                    </div>
                    <div className="emplacementAgeGate_Title">
                        <p dangerouslySetInnerHTML={{__html: ageGateLanguage.terms}} className="ageGate_title" id="ageGate_titleChange">
                            
                        </p>
                    </div>
                    <div className="flex center">
                        <div className="ageGate_submitButton flex spaceBetween">
                            <div id="ageGate_submitButtonNon" className="ageGate_submitButtonBg">
                                <a dangerouslySetInnerHTML={{__html: ageGateLanguage.non}} id="AgeGate_btnNon" className="ageGate_submitButton_link" href="#"></a>
                            </div>
                            <div id="ageGate_submitButtonOui" className="ageGate_submitButtonBg">       
                                <a dangerouslySetInnerHTML={{__html: ageGateLanguage.oui}} href="./home" id="AgeGate_btnOui" className="ageGate_submitButton_link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}