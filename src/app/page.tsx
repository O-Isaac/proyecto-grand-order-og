import Docs from '@/components/docs';
import { createSwaggerSpec } from 'next-swagger-doc';

const spec: Record<string, any> = createSwaggerSpec({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proyecto Grand Order Services',
      version: '1.0',
      description: "Principal api services.",
      contact: {
        name: "Proyecto Grand Order",
        url: "https://proyectograndorder.es"
      }
    },
  },
  apiFolder: "src/app/api/"
});

export default function Home() {
  return (
    <section className='mb-24'>
      <Docs spec={spec} />
    </section>
  )
}
