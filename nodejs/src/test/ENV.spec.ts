describe('ENV', () => {
  it('should contain required env', () => {
    expect(process.env.AWS_ACCESS_KEY_ID).toBeDefined()
    expect(process.env.AWS_SECRET_ACCESS_KEY).toBeDefined()
    expect(process.env.STORAGE_REGION).toBeDefined()
    expect(process.env.STORAGE_BUCKET).toBeDefined()
  })
})
