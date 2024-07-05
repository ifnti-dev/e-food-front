export default function HeadDetails({ setShow, total }: { setShow: any, total: number}) {

  return (
    <div
      style={{
        zIndex: 100,
        background: "#484c7f",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
      }}
    >
      <div
        style={{
          height: 44,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 12,
          paddingRight: 12
        }}
      >
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            columnGap: 2,
            alignItems: "center"
          }}
        >
          <div
            role="button"
            tabIndex={0}
            aria-label="Fermer"
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: 4,
              height: 24,
              width: 24,
              padding: 0
            }}
          >
            <svg
              onClick={setShow}
              role="graphics-symbol"
              viewBox="0 0 16 16"
              className="doubleChevronRight"
              style={{
                width: 16,
                height: 16,
                display: "block",
                fill: "rgba(255, 255, 255, 0.443)",
                flexShrink: 0
              }}
            >
              <path d="M2.25781 14.1211C2.47656 14.1211 2.66797 14.0391 2.81836 13.8887L8.14355 8.67969C8.32812 8.49512 8.41699 8.29688 8.41699 8.06445C8.41699 7.8252 8.32812 7.62012 8.14355 7.44922L2.81836 2.24023C2.66797 2.08984 2.4834 2.00781 2.25781 2.00781C1.81348 2.00781 1.46484 2.35645 1.46484 2.80078C1.46484 3.0127 1.55371 3.21777 1.7041 3.375L6.50977 8.05762L1.7041 12.7539C1.55371 12.9043 1.46484 13.1094 1.46484 13.3281C1.46484 13.7725 1.81348 14.1211 2.25781 14.1211ZM8.36914 14.1211C8.58789 14.1211 8.77246 14.0391 8.92285 13.8887L14.2549 8.67969C14.4395 8.49512 14.5283 8.29688 14.5283 8.06445C14.5283 7.8252 14.4326 7.62012 14.2549 7.44922L8.92285 2.24023C8.77246 2.08984 8.58789 2.00781 8.36914 2.00781C7.9248 2.00781 7.56934 2.35645 7.56934 2.80078C7.56934 3.0127 7.66504 3.21777 7.81543 3.375L12.6211 8.05762L7.81543 12.7539C7.66504 12.9043 7.56934 13.1094 7.56934 13.3281C7.56934 13.7725 7.9248 14.1211 8.36914 14.1211Z" />
            </svg>
          </div>
          <div style={{ height: 24 }}>
            <a
              href="/Command-d56a0dc7e10749fb95a58edc3eb144fd?pvs=23"
              rel="noopener noreferrer"
              role="link"
              aria-label="Ouvrir en pleine page"
              style={{
                display: "inline-flex",
                color: "inherit",
                textDecoration: "none",
                userSelect: "none",
                transition: "background 20ms ease-in 0s",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                borderRadius: 4,
                height: 24,
                width: 24,
                padding: 0
              }}
            >
              <svg
                role="graphics-symbol"
                viewBox="0 0 16 16"
                className="openAsPageThick"
                style={{
                  width: 16,
                  height: 16,
                  display: "block",
                  fill: "rgba(255, 255, 255, 0.443)",
                  flexShrink: 0
                }}
              >
                <path d="M2.16895 7.19629C2.59277 7.19629 2.90723 6.88867 2.90723 6.45801V5.96582L2.75684 3.81934L4.35645 5.50098L6.3252 7.4834C6.46875 7.63379 6.65332 7.70215 6.85156 7.70215C7.30957 7.70215 7.6377 7.39453 7.6377 6.93652C7.6377 6.72461 7.55566 6.54004 7.41211 6.39648L5.43652 4.4209L3.74805 2.82129L5.91504 2.96484H6.44141C6.86523 2.96484 7.18652 2.65723 7.18652 2.22656C7.18652 1.7959 6.87207 1.48145 6.44141 1.48145L2.64746 1.48145C1.86816 1.48145 1.41699 1.93262 1.41699 2.71875L1.41699 6.45801C1.41699 6.88184 1.73828 7.19629 2.16895 7.19629ZM9.55176 14.6543H13.3389C14.125 14.6543 14.5762 14.2031 14.5762 13.417V9.67773C14.5762 9.25391 14.2549 8.93945 13.8242 8.93945C13.4004 8.93945 13.0859 9.24707 13.0859 9.67773V10.1699L13.2295 12.3164L11.6299 10.6348L9.66113 8.65234C9.52441 8.50195 9.33984 8.43359 9.1416 8.43359C8.68359 8.43359 8.35547 8.74121 8.35547 9.19922C8.35547 9.41113 8.43066 9.5957 8.57422 9.73926L10.5566 11.7148L12.2383 13.3145L10.0781 13.1709H9.55176C9.12793 13.1709 8.80664 13.4785 8.80664 13.9092C8.80664 14.3398 9.12109 14.6543 9.55176 14.6543Z" />
              </svg>
            </a>
          </div>
          <div style={{ position: "relative" }}>
            <div
              role="button"
              tabIndex={0}
              style={{
                userSelect: "none",
                transition: "background 20ms ease-in 0s",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                borderRadius: 4,
                height: 24,
                width: 24,
                padding: 0
              }}
            >
              <svg
                role="graphics-symbol"
                viewBox="0 0 16 16"
                className="peekModeSide"
                style={{
                  width: 14,
                  height: 14,
                  display: "block",
                  fill: "rgba(255, 255, 255, 0.443)",
                  flexShrink: 0
                }}
              >
                <path d="M2.1416 14.4492H13.8516C15.3281 14.4492 16.0938 13.6904 16.0938 12.2344V3.9082C16.0938 2.45215 15.3281 1.69336 13.8516 1.69336H2.1416C0.665039 1.69336 -0.100586 2.44531 -0.100586 3.9082V12.2344C-0.100586 13.6904 0.665039 14.4492 2.1416 14.4492ZM2.22363 13.1094C1.58789 13.1094 1.23926 12.7812 1.23926 12.1182V4.02441C1.23926 3.36133 1.58789 3.02637 2.22363 3.02637H13.7695C14.3984 3.02637 14.7539 3.36133 14.7539 4.02441V12.1182C14.7539 12.7812 14.3984 13.1094 13.7695 13.1094H2.22363ZM8.51953 12.1113H13.2158C13.5986 12.1113 13.7559 11.9541 13.7559 11.5645V4.57812C13.7559 4.18848 13.5986 4.02441 13.2158 4.02441H8.51953C8.13672 4.02441 7.98633 4.18848 7.98633 4.57812V11.5645C7.98633 11.9541 8.13672 12.1113 8.51953 12.1113Z" />
              </svg>
            </div>
          </div>
          <div
            style={{
              height: 14,
              width: 1,
              marginLeft: 6,
              marginRight: 6,
              background: "rgba(255, 255, 255, 0.13)"
            }}
          />
          <div
            aria-disabled="true"
            role="button"
            tabIndex={-1}
            aria-label="Page précédente"
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "default",
              opacity: "0.4",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: 4,
              height: 24,
              width: 24,
              padding: 0
            }}
          >
            <svg
              role="graphics-symbol"
              viewBox="0 0 15 9"
              className="chevronUpRounded"
              style={{
                width: 14,
                height: 14,
                display: "block",
                fill: "rgba(255, 255, 255, 0.443)",
                flexShrink: 0
              }}
            >
              <path d="M1.258 6.5L7.203.422a.946.946 0 01.719-.32.99.99 0 01.726.32L14.586 6.5a.89.89 0 01.266.648c0 .524-.407.93-.922.93a.921.921 0 01-.672-.281L7.93 2.32 2.586 7.797a.926.926 0 01-.672.281.915.915 0 01-.922-.93c0-.25.094-.476.266-.648z" />
            </svg>
          </div>
          <div
            role="button"
            tabIndex={0}
            aria-label="Page suivante"
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: 4,
              height: 24,
              width: 24,
              padding: 0
            }}
          >
            <svg
              role="graphics-symbol"
              viewBox="0 0 15 9"
              className="chevronDownRounded"
              style={{
                width: 14,
                height: 14,
                display: "block",
                fill: "rgba(255, 255, 255, 0.443)",
                flexShrink: 0
              }}
            >
              <path d="M7.92188 8.65625C8.19531 8.64844 8.44531 8.54688 8.64844 8.32812L14.5859 2.25C14.7578 2.07812 14.8516 1.85938 14.8516 1.60156C14.8516 1.08594 14.4453 0.671875 13.9297 0.671875C13.6797 0.671875 13.4375 0.773438 13.2578 0.953125L7.92969 6.42969L2.58594 0.953125C2.40625 0.78125 2.17188 0.671875 1.91406 0.671875C1.39844 0.671875 0.992188 1.08594 0.992188 1.60156C0.992188 1.85938 1.08594 2.07812 1.25781 2.25L7.20312 8.32812C7.41406 8.54688 7.64844 8.65625 7.92188 8.65625Z" />
            </svg>
          </div>
        </div>
        <div style={{ flexGrow: 1, flexShrink: 1 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 0,
            flexShrink: 0,
            zIndex: 1
          }}
        >
          <div
            role="button"
            tabIndex={0}
            className="notion-topbar-share-menu pulse active"
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
              whiteSpace: "nowrap",
              height: 28,
              borderRadius: 4,
              fontSize: 14,
              lineHeight: "1.2",
              minWidth: 0,
              paddingLeft: 8,
              paddingRight: 8,
              color: "#F19828",
              marginRight: 2,
              marginLeft: 6,
              fontWeight: "bolder"
            }}
            title="Temps de cuisson"
          >

          
            {total} Sec
          </div>
          <div
            style={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            <div
              role="button"
              tabIndex={0}
              className="notion-topbar-comments-button"
              aria-label="Commentaires"
              style={{
                userSelect: "none",
                transition: "background 20ms ease-in 0s",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                borderRadius: 4,
                height: 28,
                width: 33,
                padding: 0,
                marginRight: 2
              }}
            >
              <svg
                role="graphics-symbol"
                viewBox="0 0 20 20"
                className="topbarCommentFilled"
                style={{
                  width: 20,
                  height: 20,
                  display: "block",
                  fill: "rgba(255, 255, 255, 0.81)",
                  flexShrink: 0
                }}


              >
                <path d="M5.9375 18.4844C6.38281 18.4844 6.71094 18.2656 7.25 17.7891L9.92969 15.4297H14.6328C16.9844 15.4297 18.3047 14.0703 18.3047 11.75V5.67969C18.3047 3.35938 16.9844 2 14.6328 2H4.67188C2.32812 2 1 3.35938 1 5.67969V11.75C1 14.0781 2.36719 15.4297 4.61719 15.4297H4.9375V17.3438C4.9375 18.0391 5.30469 18.4844 5.9375 18.4844ZM6.32812 16.7344V14.5078C6.32812 14.0469 6.125 13.8672 5.6875 13.8672H4.72656C3.25781 13.8672 2.55469 13.125 2.55469 11.7031V5.72656C2.55469 4.30469 3.25781 3.5625 4.72656 3.5625H14.5859C16.0469 3.5625 16.75 4.30469 16.75 5.72656V11.7031C16.75 13.125 16.0469 13.8672 14.5859 13.8672H9.84375C9.36719 13.8672 9.13281 13.9453 8.80469 14.2891L6.32812 16.7344ZM5.67969 6.82812H13.5469C13.8125 6.82812 14.0312 6.60156 14.0312 6.32812C14.0312 6.07031 13.8125 5.85156 13.5469 5.85156H5.67969C5.41406 5.85156 5.20312 6.07031 5.20312 6.32812C5.20312 6.60156 5.41406 6.82812 5.67969 6.82812ZM5.67969 9.30469H13.5469C13.8125 9.30469 14.0312 9.08594 14.0312 8.8125C14.0312 8.55469 13.8125 8.32812 13.5469 8.32812H5.67969C5.41406 8.32812 5.20312 8.55469 5.20312 8.8125C5.20312 9.08594 5.41406 9.30469 5.67969 9.30469ZM5.67969 11.7891H10.8047C11.0781 11.7891 11.2891 11.5703 11.2891 11.3047C11.2891 11.0312 11.0781 10.8125 10.8047 10.8125H5.67969C5.41406 10.8125 5.20312 11.0312 5.20312 11.3047C5.20312 11.5703 5.41406 11.7891 5.67969 11.7891Z" />
              </svg>
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            className="notion-topbar-favorite-button"
            aria-label="Ajouter aux favoris"
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: 4,
              height: 28,
              width: 33,
              padding: 0,
              marginRight: 2
            }}
          >
            <svg
              role="graphics-symbol"
              viewBox="0 0 20 20"
              className="topbarStar"
              style={{
                width: 20,
                height: 20,
                display: "block",
                fill: "rgba(255, 255, 255, 0.81)",
                flexShrink: 0
              }}
            >
              <path d="M4.77321 18.0645C5.14821 18.3457 5.60915 18.252 6.1404 17.8691L10.2029 14.8848L14.2576 17.8691C14.7888 18.252 15.2498 18.3457 15.6248 18.0645C15.992 17.7832 16.0701 17.3223 15.8591 16.7051L14.2576 11.9395L18.3513 9.00195C18.8826 8.62695 19.1013 8.20508 18.9529 7.76758C18.8045 7.33008 18.3904 7.11133 17.7341 7.11914L12.7185 7.1582L11.1873 2.36133C10.9841 1.73633 10.6638 1.40039 10.2029 1.40039C9.73415 1.40039 9.41383 1.73633 9.21071 2.36133L7.68727 7.1582L2.66383 7.11914C2.00758 7.11133 1.59352 7.33008 1.44508 7.75977C1.29665 8.20508 1.52321 8.62695 2.04665 9.00195L6.1404 11.9395L4.53883 16.7051C4.3279 17.3223 4.40602 17.7832 4.77321 18.0645ZM6.17165 16.1504C6.15602 16.1348 6.15602 16.127 6.17165 16.0801L7.64821 11.916C7.78102 11.5254 7.74196 11.291 7.37477 11.0488L3.72633 8.54883C3.69508 8.52539 3.67946 8.50977 3.69508 8.49414C3.7029 8.4707 3.71852 8.4707 3.75758 8.4707L8.17946 8.57227C8.58571 8.58789 8.79665 8.45508 8.91383 8.05664L10.156 3.82227C10.1716 3.77539 10.1795 3.75977 10.2029 3.75977C10.2185 3.75977 10.2341 3.77539 10.242 3.82227L11.4841 8.05664C11.6013 8.45508 11.8123 8.58789 12.2263 8.57227L16.6404 8.4707C16.6873 8.4707 16.7029 8.4707 16.7107 8.49414C16.7185 8.50977 16.7029 8.52539 16.6716 8.54883L13.0232 11.0488C12.6638 11.291 12.617 11.5254 12.7576 11.916L14.2263 16.0801C14.242 16.127 14.242 16.1348 14.2263 16.1504C14.2185 16.166 14.1951 16.1582 14.1638 16.1348L10.6638 13.4316C10.3357 13.1816 10.0623 13.1816 9.73415 13.4316L6.23415 16.1348C6.2029 16.1582 6.18727 16.166 6.17165 16.1504Z" />
            </svg>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="notion-topbar-more-button"
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 28,
              borderRadius: 4
            }}
          >
            <svg
              role="graphics-symbol"
              viewBox="0 0 13 3"
              className="dots"
              style={{
                width: 18,
                height: 18,
                display: "block",
                fill: "rgba(255, 255, 255, 0.81)",
                flexShrink: 0
              }}
            >
              <g>
                <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z" />
                <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z" />
                <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ width: "calc(100% + 0px)", userSelect: "none" }} />
    </div>

  )
}