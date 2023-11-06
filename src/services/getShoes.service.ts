import ShoesRepository from "../databases/repositories/ShoesRepository";
class getTestService 
{
    async execute()
    {
        return ShoesRepository.select();
    }
}

export default new getTestService;