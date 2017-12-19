export default {
  getImage () {
    return {
      id: 'a78c21ed-2f7b-407a-aea7-2d49ffe13a5c',
      publicId: '569L4WkW4duuR3cVM83Q3G',
      userId: 'platzigram',
      liked: false,
      like: 0,
      src: 'http://platzigram.test/569L4WkW4duuR3cVM83Q3.jpg',
      description: '#awesome',
      tags: ['awesome'],
      createdAt: new Date().toString()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getUser () {
    return {
      id: 'af374136-4f84-4ffa-8c72-499eb2e4e52d',
      name: 'Steven Anaya',
      username: 'stvanaya',
      email: 's@platzi.test',
      password: 'platzi',
      createdAt: new Date().toString()
    }
  }
}
