import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';

export function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </>
  );
}
