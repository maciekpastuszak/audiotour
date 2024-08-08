import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import HoverButtton from "./ui/HoverButtton"


const ContactForm = () => {
  return (
    <div key="1" className="border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md space-y-8">
      <div className="space-y-2">
        <p className="text-gray-500 dark:text-gray-400 text-xl">
          Jeśli chciałbyś/ chciałabyś skontaktować się znami, wypełnij poniższy formularz
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="name">
            Imię Nazwisko
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="mail">
            E-mail
          </Label>
          <Input
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            id="mail"
            required
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-600 dark:text-gray-400 required" htmlFor="message">
            Wiadomość
          </Label>
          <textarea
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 w-full p-2"
            defaultValue="Wiadomość"
            id="message"
            placeholder="Napisz do nas"
            required
            rows={4}
          />
        </div>
       
        <HoverButtton btnText='Wyślij' type='submit' />
      </div>
    </div>
  )
}

export default ContactForm