import { IClient } from '@/models/client.model'
import faker from 'faker'
import request from 'supertest'
import app from '../app'
import setupTestDB from './utils/setupTestDB'

setupTestDB()



describe('Client Routes', () => {
  const newClient = {
    name: "Luiz Eduardo",
    debt: 5000,
    debtDate: new Date()
  }
  describe('POST /clients', () => {
    it('should return client with 200 status', async () => {
      const res = await request(app).post('/clients').send({ client: newClient }).expect(200)
      expect(res.body).toHaveProperty('name')
      expect(res.body).toHaveProperty('description')
      expect(res.body).toHaveProperty('image')
    })

    it('should return 400 status if name is less than 3 characters', async () => {
      await request(app).post('/clients').send({ client: newClient }).expect(400)
    })

  })

if (false){
  describe('GET /clients', () => {
    it('should return clients array with 200 status ', async () => {
      const res = await request(app).get('/clients').expect(200)
      expect(res.body).toEqual([])
    })
  })

  describe('GET /client', () => {
    it('should return client with 200 status ', async () => {
      const resInsert = await request(app).post('/clients').send({ client: newClient }).expect(200)
      const res = await request(app).get(`/clients/${resInsert.body._id}`).expect(200)
      expect(res.body).toHaveProperty('name')
      expect(res.body).toHaveProperty('description')
      expect(res.body).toHaveProperty('image')
    })

    it('should return 404 error if not found client by id ', async () => {
      await request(app).get('/clients/60aa2e8ed87c9ffe67df0000').expect(404)
    })
  })

  describe('PATCH /client', () => {
    it('should return client with 200 status ', async () => {
      const resInsert = await request(app).post('/clients').send({ client: newClient }).expect(200)

      const updateClient: IClient = {
        name: faker.name.findName(),
        description: faker.lorem.word(5),
        image: faker.image.business(200, 100),
      }

      const res = await request(app)
        .patch(`/clients/${resInsert.body._id}`)
        
        .send({
          client: updateClient,
        })
        .expect(200)
      expect(res.body.name).toEqual(updateClient.name)
      expect(res.body.description).toEqual(updateClient.description)
      expect(res.body.image).toEqual(updateClient.image)
    })

    it('should return 401 status if unauthorization', async () => {
      await request(app).patch('/clients/60aa2e8ed87c9ffe67df0000').expect(401)
    })

    it('should return 404 error if not found client by id ', async () => {
      await request(app).patch('/clients/60aa2e8ed87c9ffe67df0000').expect(404)
    })
  })

  describe('DELETE /client', () => {
    it('should delete client with 204 status ', async () => {
      const resInsert = await request(app).post('/clients').send({ client: newClient }).expect(200)
      await request(app).delete(`/clients/${resInsert.body._id}`).expect(204)
    })

    it('should return 401 status if unauthorization', async () => {
      await request(app).delete('/clients/60aa2e8ed87c9ffe67df0000').expect(401)
    })

    it('should return 404 error if not found client by id ', async () => {
      await request(app).delete('/clients/60aa2e8ed87c9ffe67df0000').expect(404)
    })
  })
}
})
