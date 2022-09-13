using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InspectionWebApi
{
    public class Inspection
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;

        [StringLength(200)]
        public string Comment { get; set; } = string.Empty;

        public int InspectionTypeId { get; set; }
        public InspectionType? InspectionType { get; set; }
    }
}
