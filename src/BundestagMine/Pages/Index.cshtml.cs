﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BundestagMine.Services;
using BundestagMine.SqlDatabase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace BundestagMine.Pages
{
    public class IndexModel : PageModel
    {
        private readonly GraphService _graphService;
        private readonly BundestagMineDbContext _db;
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger, BundestagMineDbContext db, GraphService graphService)
        {
            _graphService = graphService;
            _db = db;
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}
