import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import HoverButtton from "./ui/HoverButtton"


const ContactForm = () => {
  return (
    <div key="1" className="border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md space-y-8">
      <div className="space-y-2">
      <h3 className='text-xl bold font-bold'>Wyślij zapytanie</h3>
        <p className="text-gray-500 dark:text-gray-400 text-l">
          Jeśli chciałbyś/ chciałabyś skontaktować się znami, wypełnij poniższy formularz
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="name"
            placeholder="Imię Nazwisko"
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="mail"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="space-y-2">
          <textarea
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 w-full p-2"
            id="message"
            placeholder="Twoja wiadomość"
            required
            rows={4}
          />
        </div>
       <div className="flex justify-end max-w-[213px] ms-auto">
          <HoverButtton btnText='Wyślij' type='submit' />
       </div>
      </div>
    </div>
  )
}

export default ContactForm