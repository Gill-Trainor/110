
namespace Rental.Models
{

    public class Car
    {

        public int Id { get; set; }
        public string Email{ get; set; }

        public string Phone { get; set;}

        public string Make {get; set;}

        public string Model { get; set;}

        public string Year {get; set; }

        public string DailyPrice{ get; set; }
        
        public string Cyls { get; set; }

        ///0 economy, 1 mid lux 2 lux 3 sport 4 super sport

        public string City{ get; set; }

        public string State { get; set; }

/*         public string StartDate { get; set; }

        public string EndDate { get; set; } */

        public string ImageUrl {get; set; }

        public string Description {get; set; }
    }

}