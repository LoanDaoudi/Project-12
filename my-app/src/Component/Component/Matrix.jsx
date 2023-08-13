import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function isPartOfLink(char, snippet) {
        const linkPattern = /https:\/\/github.com\/LoanDaoudi/;
        return linkPattern.test(snippet) && linkPattern.source.includes(char);
    }
    const codeSnippets = [
          '<Button onClick={handleClick}>Cliquez sur Moi</Button>',
          '<Input type="text" placeholder="Entrez votre nom" onChange={handleNameChange} value={name} />',
          '<Modal isOpen={modalOpen} onRequestClose={handleModalClose}><div>Contenu du Modal</div></Modal>',
          '<a> https://github.com/LoanDaoudi</a> ',
          '<Dropdown options={dropdownOptions} selectedValue={selectedValue} onOptionSelect={handleOptionSelect} />',
          '<NavBar leftComponent={<Logo />} rightComponent={<ProfileMenu />} />',
          '<Table data={tableData} columns={tableColumns} onRowClick={handleRowClick} />',
          '<ImageSlider images={imageArray} currentIndex={currentImageIndex} onImageChange={handleImageChange} />',
          '<Tooltip content="Ceci est une astuce!" position="top"><Icon name="info" /></Tooltip>',
          '<Paginator totalItems={100} itemsPerPage={10} currentPage={currentPage} onPageChange={handlePageChange} />',
          '<Sidebar items={sidebarItems} activeItem={activeItem} onItemSelect={handleItemSelect} />',
          '<a> https://github.com/LoanDaoudi</a> ',
         '<Accordion sections={sectionsData} activeSection={activeSection} onSectionToggle={handleSectionToggle} />',
         '<Tabs tabs={tabsData} activeTab={activeTab} onTabChange={handleTabChange} />',
         '<DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />',
         '<Notification type="error" message="ERROR 404" onClose={handleCloseNotification} />',
         '<SearchBox value={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />',
         '<Breadcrumb items={breadcrumbItems} onItemClick={handleBreadcrumbClick} />',
         '<a> https://github.com/LoanDaoudi</a> ',
         '<Carousel items={carouselItems} activeSlide={activeSlide} onSlideChange={handleSlideChange} />',
         '<DropdownSelect options={selectOptions} value={selectedOption} onChange={handleSelectChange} />',
         '<Rating stars={5} currentRating={currentRating} onRate={handleRate} />',
         '<AudioPlayer source={audioSource} onPlay={handlePlay} onPause={handlePause} />',
          
    ];

    function createRow(index, initialDelay = 0) {
      const row = document.createElement('div');
      row.className = 'matrix-row';
      row.style.top = `${(window.innerHeight / 80) * index}px`;  
      const animationDuration = 18 + Math.random() * 25;
      row.style.animationDuration = `${animationDuration}s`;
      row.style.animationDelay = `-${initialDelay}s`;  
  
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const chars = randomSnippet.split('');
    
      chars.forEach(char => {
          const span = document.createElement('span');
          span.innerText = char;
  
          if (isPartOfLink(char, randomSnippet)) {
              span.style.color = 'red';
              span.style.fontWeight = 'bold';
          }
  
          row.appendChild(span);
      });
    
      container.appendChild(row);
      row.addEventListener('animationend', () => {
          container.removeChild(row);
          createRow(index);
      });
  }
  
  for (let i = 0; i < 80; i++) {  
      createRow(i, Math.random() * 10);
  }
  
      return () => {
        const existingRows = container.querySelectorAll('.matrix-row');
        existingRows.forEach(row => container.removeChild(row));
      };
  
    }, []);
  
    return <div className="matrix-background" ref={containerRef}></div>;
  }
  
export default MatrixBackground;