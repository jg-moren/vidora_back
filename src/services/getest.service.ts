import TestRepository from "../databases/repositories/TestRepository";
class getTestService 
{
    async execute()
    {
        return TestRepository.select();
    }
}

export default new getTestService;