describe('ENV', () => {
  it('should contain required env', () => {
    expect(process.env.STORAGE_ACCESS_KEY).toBeDefined()
    expect(process.env.STORAGE_SECRET_KEY).toBeDefined()
    expect(process.env.STORAGE_REGION).toBeDefined()
    expect(process.env.STORAGE_BUCKET).toBeDefined()
  })
})
