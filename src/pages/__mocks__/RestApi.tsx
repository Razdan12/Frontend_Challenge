const mockResponse = {
    data: {
      articles: [
        {
          title: "Mock Title 1",
          content: "Mock Content 1",
          author: "Mock Author 1",
          description: "Mock Description 1",
          urlToImage: "mock-image-url-1",
        },
      
      ],
    },
  };
  
  export default {
    getLatestNews: jest.fn().mockResolvedValue(mockResponse),
  };
  