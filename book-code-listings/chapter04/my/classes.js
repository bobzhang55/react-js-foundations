const author1 = {
    totalWords: 10
  }
  const author2 = {
    totalWords: 2
  }
  const write = function(words){
    this.totalWords += words;
    return this.totalWords;
  }

  let a = write.call(author2,500);